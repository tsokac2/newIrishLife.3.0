## Table of Contents
* [Cloud-Based Validators](#Cloud-Based-Validators)
    * [W3C HTML Validator](#W3C-HTML-Validator)
    * [W3C CSS Validator](#W3C-CSS-Validator)
    * [JSHint Validator](#JSHint-Validator)
    * [PEP8 Validator](#PEP8-Validator)
* [Test Cases Description and Results](#Test-Cases-Description-and-Results)
* [Local Based Validators](#Local-Based-Validators)
  * [Python Unit Testing Framework](#Python-Unit-Testing-Framework)
  * [Jasmine](#Jasmine)
* [W3 Validator Errors and Solutions](#W3-Validator-Errors-and-Solutions)
* [Developer Tools Console Logs Errors and Solutions](#Developer-Tools-Console-Logs-Errors-and-Solutions)

****

## Cloud-Based Validators

### [W3C HTML Validator](https://validator.w3.org/#validate_by_uri)

* HTML [Home Result]() - No errors
* HTML [Trip Result]() - No errors
* HTML [Work Result]() - No errors
* HTML [Life Result]() - No errors
* HTML [Tips Result]() -  No errors
* HTML [Registration Result]() - No errors
* HTML [Login Result]() - No errors
* HTML [Add_Tip Result]() - No errors

### [W3C CSS Validator](https://jigsaw.w3.org/css-validator/)
* CSS [index.css Result]() - No errors

### [JSHint Validator](https://jshint.com/)
* JS file [emailnews.js Result]() - No errors
* JS file [maps.js Result]() - No errors
* JS file [cards.js Result]() - No errorsTESTING

### [PEP8 Validator](http://pep8online.com/)
* Python file [app.py Result]() - No errors
* Python file [forms.py Result]() - No errors
* Python file [test.py Result]() - No errors

****

## Test Cases Description and Results

Full test results can be found in an excel document **[HERE](https://github.com/tsokac2/newIrishLife.3.0/blob/main/static/wireframes/M3_Testing.xlsx)**

![Test Results](https://github.com/tsokac2/newIrishLife.3.0/blob/main/static/wireframes/TC001.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/TC004.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/TC006.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/TC007.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/TC008.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/TC009.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/test12.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/test16.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/test20.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/test25.png)
![Test Results](https://github.com/tsokac2/newirishlife.3.0/blob/main/static/wireframes/test27.png)

****

## Local Based Validators

### [Python Unit Testing Framework](https://docs.python.org/3/library/unittest.html)
Testing was processed to ensure that routing functionality is redirecting users to the requested page route.

#### Testing covered:
* Test **Home** page load response
* Test **Trip** page load response
* Test **Work** page load response
* Test **Life** page load response
* Test **Tips** page load response
* Test **Sign Up** page load response
* Test **Login** page load response
* Command line 7 [Tests Result]()

**FULL SOURCE CODE:** [test.py]()

### [Jasmine](https://jasmine.github.io/)
Behavior-driven development framework for testing JavaScript code.

#### Testing DOM Events Using jQuery and Jasmine 2.0
1. STEP: Create **testing** folder in project root folder - **../testing**

2. STEP: Create **cardsSpec.js** file in to **../testing/spec** folder

3. STEP: Create **cardstest.html** file in **testing** folder

4. STEP: In **cardstest.html** create basic **<!DOCTYPE html>** structure with **`<html>`**, **`<head>`** opening and closing tags

5. STEP: In the **`<head>`** element place **CDN** links in the following order - **[CDN SOURCE](https://cdnjs.com/libraries/jasmine)**:
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.js"></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine-html.js" ></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/boot.js"></script>`
  * `<script src="https://code.jquery.com/jquery-3.5.1.js"></script>`
  * `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.css"/>` **[SOURCE](https://code.jquery.com/)** 
  * `<script src="../testing/libraries/jasminejquery.js"></script>` external library **[SOURCE](https://bowercdn.net/c/jasmine-jquery-2.1.1/lib/jasmine-jquery.js)**  

6. STEP: Import custom scripts for Jasmine testing under imported **CDN's** in the following order:
  * `<script src="../testing/scripts/cards.js"></script>`
  * `<script src="../testing/spec/cardsSpec.js"></script>`

**Test Steps**

* `setFixtures('<button id="showLinks1"</button>');`        - mimicking `<button>` element on line 265 in trip.html
* `$('#showLinks1').on('click', function (){...}`           - referencing jQuery DOM events applied to `<button>` element
* `var spyEventShow = spyOnEvent('#showLinks1', 'click');`  - creating variable var `var spyEventShow;`for invoking `spyOnEvent` on to `<button>` element
* `$('#showLinks1').trigger('click');`                      - triggering DOM event
* `expect(spyEventShow).toHaveBeenTriggered();`             - including `spyEventShow` variable in to `.toHaveBeenTriggered()` test instance

**FULL SOURCE CODE:** [Jasmine - cardsSpec.js](https://github.com/tsokac2/newIrishLife.3.0/blob/main/static/testing/spec/cardsSpec.js)

**Live Version** - [Cards Test](https://tsokac2.github.io/newIrishLife.3.0/static/testing/cardstest.html)

#### Testing Validation Functions for EMAILJS API Newsletter services

1. STEP: Create **testing** folder in project root folder - **../testing**

2. STEP: Create **emailnewsSpec.js** file in to **../testing/spec** folder

3. STEP: Create **emailnewstest.html** file in **testing** folder

4. STEP: In **emailnewstest.html** create basic **<!DOCTYPE html>** structure with **`<html>`**, **`<head>`** opening and closing tags

5. STEP: In the **`<head>`** element place **CDN** links in the following order - **[CDN SOURCE](https://cdnjs.com/libraries/jasmine )**:
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.js"></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine-html.js" ></script>`
  * `<script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/boot.js"></script>`
  * `<script src="https://code.jquery.com/jquery-3.5.1.js"></script>`
  * `<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/3.6.0/jasmine.css"/>` **[SOURCE](https://code.jquery.com/)**: 

6. STEP: Import custom scripts for Jasmine testing under imported **CDN's** in the following order:
  * `<script src="../testing/scripts/emailnews.js"></script>`
  * `<script src="../testing/spec/emailnewsSpec.js"></script>`

**Test Steps**

* Testing if `validateName()` function exist

  ```
  describe("Validate Name", function(){
    it("validateName() function should exist", function(){
        expect(validateName).toBeDefined();
    });
  ```
* Testing if `validateName()` function return **TRUE** if input `value.length` is > that 2

  ```
  it("validateName should return TRUE", function(){
      var testPass = validateName("Tom");
      expect(testPass).toBe(true);
  });
  ```

* Testing if `validateName()` function return **FALSE** if input `value.length` is < that 2

  ```
  it("validateName should return FALSE", function(){
      var testFaild = validateName("T");
      expect(testFaild).toBe(false);
  });
  ```

**FULL SOURCE CODE:** [Jasmine - emailnewsSpec.js](https://github.com/tsokac2/newIrishLife.3.0/blob/main/static/testing/spec/emailnewsSpec.js)

**Live Version** - [Emailnews Test](https://tsokac2.github.io/newIrishLife.3.0/static/testing/emailnewstest.html)

****