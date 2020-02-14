$(window).on('load', function() {
  (function() {
    // Before using it we must add the parse and format functions
    // Here is a sample implementation using moment.js
    validate.extend(validate.validators.datetime, {
      // The value is guaranteed not to be null or undefined but otherwise it
      // could be anything.
      parse: function(value, options) {
        return +moment.utc(value);
      },
      // Input is a unix timestamp
      format: function(value, options) {
        var format = options.dateOnly ? "YYYY-MM-DD" : "YYYY-MM-DD hh:mm:ss";
        return moment.utc(value).format(format);
      }
    });

    // These are the constraints used to validate the form
    var constraints = {
      email: {
        presence: true,
        email: true
      },
      firstName: {
        presence: true,
        length: {
          minimum: 2,
          maximum: 50,
        }
      },
      lastName: {
        presence: true,
        length: {
          minimum: 2,
          maximum: 50
        }
      },
      phone: {
        presence: true,
        length: {
          minimum: 17,
          maximum: 17,
          message: " is too short"
        }
      }
    };

    var formTop = document.querySelector("form#LP19_Top_Form");
    var formBottom = document.querySelector("form#LP19_Bottom_Form");

    formTop.addEventListener("submit", function(ev) {
      ev.preventDefault();
      handleFormSubmit(formTop);
    });
    formBottom.addEventListener("submit", function(ev) {
      ev.preventDefault();
      handleFormSubmit(formBottom);
    });


    // Hook up the form so we can prevent it from being posted
    /*    var form = document.querySelector("form#LP19_Top_Form");
        form.addEventListener("submit", function(ev) {
          ev.preventDefault();
          handleFormSubmit(form);
        });*/

    // Hook up the inputs to validate on the fly
    var inputsTop = document.querySelectorAll("#LP19_Top_Form input");
    for (var i = 0; i < inputsTop.length; ++i) {
      inputsTop.item(i).addEventListener("change", function(ev) {
        var errorsTop = validate(formTop, constraints) || {};
        showErrorsForInput(this, errorsTop[this.name])
      });
    }
    var inputsBottom = document.querySelectorAll("#LP19_Bottom_Form input,#LP19_Bottom_Form textarea");
    for (var i = 0; i < inputsBottom.length; ++i) {
      inputsBottom.item(i).addEventListener("change", function(ev) {
        var errorsBottom = validate(formBottom, constraints) || {};
        showErrorsForInput(this, errorsBottom[this.name])
      });
    }

    function handleFormSubmit(form, input) {
      // validate the form against the constraints
      var errors = validate(form, constraints);
      // then we update the form to reflect the results
      showErrors(form, errors || {});
      if (!errors) {
        showSuccess(form);
      }
    }

    // Updates the inputs with the validation errors
    function showErrors(form, errors) {
      // We loop through all the inputs and show the errors for that input
      _.each(form.querySelectorAll("input[name], select[name]"), function(input) {
        // Since the errors can be null if no errors were found we need to handle
        // that
        showErrorsForInput(input, errors && errors[input.name]);
      });
    }

    // Shows the errors for a specific input
    function showErrorsForInput(input, errors) {
      // This is the root of the input
      //var formGroup = closestParent(input, "form-group");
      var formGroup = input.parentNode;

      //return false;

      // Find where the error messages will be insert into

      var messages = formGroup.querySelector(".messages");

      var inputProblem = formGroup.querySelector("input.form-control");

      // First we remove any old messages and resets the classes
      resetFormGroup(formGroup);
      // If we have errors
      if (errors) {
        // we first mark the group has having errors
        inputProblem.classList.add("is-invalid");
        // then we append all the errors
        _.each(errors, function(error) {
          addError(messages, error);
        });
      } else {
        // otherwise we simply mark it as success
        if(inputProblem == null){
        } else {
          inputProblem.classList.remove("is-invalid");
          inputProblem.classList.add("is-valid");
        }
      }
    }

    // Recusively finds the closest parent that has the specified class
    function closestParent(child, className) {
      if (!child || child == document) {
        return null;
      }
      if (child.classList.contains(className)) {
        return child;
      } else {
        return closestParent(child.parentNode, className);
      }
    }

    function resetFormGroup(formGroup) {
      // Remove the success and error classes
      formGroup.classList.remove("has-error");
      formGroup.classList.remove("has-success");
      // and remove any old messages
      _.each(formGroup.querySelectorAll(".help-block.error"), function(el) {
        el.parentNode.removeChild(el);
      });
    }

    // Adds the specified error with the following markup
    // <p class="help-block error">[message]</p>
    function addError(messages, error) {
      var block = document.createElement("p");
      block.classList.add("help-block");
      block.classList.add("error");
      block.innerText = error;
      messages.appendChild(block);
    }

    function showSuccess(form) {
      // We made it \:D/
      console.log("Success!" + form.id);
      document.getElementById(form.id).submit();
    }
  })();

});
