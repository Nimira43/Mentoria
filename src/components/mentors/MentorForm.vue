<template>
  <form @submit.prevent="submitForm">
    
    <div 
      class="form-control"
      :class="{invalid: !firstName.isValid}"
    >
      <label for="firstname">Firstname</label>
      <input 
        type="text" 
        id="firstname" 
        v-model.trim="firstName.val"  
      />
      <p
        v-if="!firstName.isValid"
      >
        Firstname is required
      </p>
    </div>
    
    <div 
      class="form-control"
      :class="{invalid: !lastName.isValid}"
    >  
      <label for="lastname">Lastname</label>
      <input 
        type="text" 
        id="lastname" 
        v-model.trim="lastName.val"  
      />
      <p
        v-if="!lastName.isValid"
      >
        Lastname is required
      </p>
    </div>
    
    <div 
      class="form-control"
      :class="{invalid: !description.isValid}"
    >  
      <label for="description">Description</label>
      <textarea 
        id="description" 
        rows="5"
        v-model.trim="description.val"
      ></textarea>
      <p
        v-if="!description.isValid"
      >
        Description is required
      </p>
    </div>

    <div 
      class="form-control"
      :class="{invalid: !rate.isValid}"
    >  
      <label for="rate">Hourly Rate</label>
      <input 
        type="number" 
        id="rate" 
        v-model.number="rate.val"
      />
      <p
        v-if="!rate.isValid"
      >
        Rate is required
      </p>
    </div>

    <div 
      class="form-control"
      :class="{invalid: !areas.isValid}"
    >  
      <h3>Areas of Expertise</h3>
      <div>
        <input 
          type="checkbox" 
          id="frontend" 
          value="frontend"
          v-model="areas.val"
        >
        <label for="frontend">Frontend Development</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="backend" 
          value="backend"
          v-model="areas.val"
        >
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input 
          type="checkbox" 
          id="career" 
          value="career"
          v-model="areas.val"
        >
        <label for="career">Career Development</label>
      </div>
      <p
        v-if="!areas.isValid"
      >
        At least one expertise must be selected
      </p>
    </div>
    <p
      v-if="!formIsValid"  
    >
    Please ensure the above errors are corrected and submit again.
  </p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true
      },
      lastName: {
        val: '',
        isValid: true
      },
      description: {
        val: '',
        isValid: true
      },
      rate: {
        val: null,
        isValid: true
      },
      areas: {
        val: [],
        isValid: true
      },
      formIsValid: true
    }
  },
  methods: {
    validateForm() {
      this.formIsValid = true 
      if (this.firstName.val === '') {
        this.firstName.isValid = false
        this.formIsValid = false
      }
      if (this.lastName.val === '') {
        this.lastName.isValid = false
        this.formIsValid = false
      }
      if (this.description.val === '') {
        this.description.isValid = false
        this.formIsValid = false
      }
      if (!this.rate.val || this.rate.val < 0) {
        this.rate.isValid = false
        this.formIsValid = false
      }
      if (this.areas.val.length === 0) {
        this.area.isValid = false
        this.formIsValid = false
      }
    },
    submitForm() {
      this.validateForm()

      if (!this.formIsValid) {
        return
      }

      const formData = {
        first: this.firstName,
        last: this.lastName,
        desc: this.description,
        rate: this.rate,
        areas: this.areas
      }
      this.$emit('save-data', formData)
    }
  }
}
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #111;
  font: inherit;

  border-radius: 3px;
}

input:focus,
textarea:focus {
  background-color: #ffffee;
  outline: none;
  border-color: #012222;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #012222 solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: #ff0000;
}

.invalid input,
.invalid textarea {
  border: 1px solid #ff0000;
}
</style>
