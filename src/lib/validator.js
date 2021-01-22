import { computed, reactive } from "vue";

export const  isEmail = {
    validate: (v) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v),
    message: "please provide a valid email address",
}
export const minLength = (minimum, message) => {
    return {
    validate: (v) => v.length >= minimum,
    message: message ? message :  (v) => {return  `Expected a mimimum of ${minimum} character, ${v.length} characters provided`},
  }
}

export default function makeValidator(data, {validations}){

    let _value = reactive({
      errors: {},
      isValid: false,
    });
    function runValidation (){
            let errors = Object.entries(validations).reduce(
              (errors, [property, rules]) => {    
                let currentValue = data.value[property];
                let checkedErrors = Object.entries(rules)
                  .map(([ruleName, { validate, message }]) => {
                    if (!validate(currentValue)) {
                      return { rule: ruleName, message: typeof message === 'function' ? message(currentValue) : message };
                    }
                    return null;
                  })
                  .filter(Boolean);
      
                errors[property] =
                  checkedErrors.length > 0 ? checkedErrors : undefined;
                return errors;
              },
              {}
            );
      
            _value.isValid = Object.values(errors).every((v) => v === undefined);
            _value.errors = errors;
            return _value;
  
    }
        const validator = computed(runValidation )
        return validator        
}

