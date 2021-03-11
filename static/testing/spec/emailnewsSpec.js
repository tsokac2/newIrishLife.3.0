describe("Testing Callback functions for Validation process against Input Elements Values", function(){

    describe("Validate Name", function(){
        it("validateName() function should exist", function(){
            expect(validateName).toBeDefined();
        });

        it("validateName should return TRUE", function(){
            var testPass = validateName("Tom");
            expect(testPass).toBe(true); 
        });

        it("validateName should return FALSE", function(){
            var testFaild = validateName("T");
            expect(testFaild).toBe(false);
        });
    });

    describe("Validate Email", function(){
        it("validateEmail() function should exist", function(){
            expect(validateEmail).toBeDefined();
        });

        it("validateEmail should return TRUE", function(){
            var testPass = validateName("email@gmail.com");
            expect(testPass).toBe(true); 
        });

        it("validateEmail should return FALSE", function(){
            var testFaild = validateName("");
            expect(testFaild).toBe(false); 
        });

    });

    

});