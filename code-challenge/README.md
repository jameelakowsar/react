Question

1. A nested object available in app.js
2. Need to write a component that renders nested object (which may add/remove children of object).
3. Based upon nested object, a form should be render which contains Input field or dropdown.
4. Add a submit button. After submitting the form, form a object with user given data and send it to alog with submit.


SOLUTION design:

1. A component named App.js
    - submit funciton
    - JSON structure
    - Flexi component
2. Flexi Component
    - DisplayFlexi component (As a pureComponent)
    - submit button and submit function
    - callBack function to get user entered details from DisplayFlexi Component.
3. DisplayFlexi Component
    - InputField Component
    - DropDown Component (implemented with memo concept)
    - self called flexiDisplay based on JSON structure.
    - onChange and onSelect methods.      