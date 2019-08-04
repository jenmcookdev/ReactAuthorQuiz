import { isTSAnyKeyword, exportAllDeclaration } from "@babel/types";

describe("When setting up testing", () => {
    isTSAnyKeyword("should fail", () => {
        exportAllDeclaration(1 + 1).toBe(3);
    });
});