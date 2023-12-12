import createUser from "./createUser.js";
import onError from "./callbacks/onError.js";
import onSuccess from "./callbacks/onSuccess.js";

describe("Dada la función createUser", () => {
  describe("Cuando la función se llama con un correo electrónico como cadena vacía", () => {
    test("Entonces se devuelve una cadena", async () => {
      // Organizar
      const inputEmptyString = "";
      // Actuar
      const result = await createUser(inputEmptyString, onError, onSuccess);
      // Afirmar
      expect(result).toEqual("Error: user not created");
    });
  });

  describe("Cuando la función se llama con un correo electrónico no vacío", () => {
    test("Entonces se devuelve una cadena para el caso de éxito", async () => {
      // Organizar
      const inputString = "email@gmail.com";

      // Actuar
      const result = await createUser(inputString, onError, onSuccess);

      // Afirmar
      expect(result).toEqual(
        `Usuario con correo electrónico: ${inputString} ha sido creado correctamente`,
      );
    });
  });
});
