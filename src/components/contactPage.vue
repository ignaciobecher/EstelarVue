<template>
    <div class="container ">
        <div class="row ">
            <div class="col-12 col-md-8 mx-md-auto mt-5 text-center">
                <h1 class="mb-4"> Contacto</h1>
                <form class="px-2 px-sm-5 py-5 rounded" ref="form" @submit.prevent="submit">
                    <div class="form-group">
                        <label for="phone">Nombre</label>
                        <input v-model="name" type="text" class="form-control" id="phone" placeholder="Ingrese su nombre"
                            name="from_name">
                        <small id="phoneHelp" class="form-text"></small>
                        <p v-if="v$.name.$error">Nombre Invalido</p>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input v-model="email" type="text" class="form-control" id="email" placeholder="Ingrese su mail"
                            name="email_id">
                        <small id="emailHelp" class="form-text">Ingrese su email</small>
                        <p v-if="v$.email.$error">Email Invalido</p>
                    </div>
                    <div class="form-group">
                        <label for="username">Consulta</label>
                        <input v-model="message" type="text" class="form-control" id="username"
                            placeholder="Ingrese su consulta" name="message">
                        <small id="usernameHelp" class="form-text">Ingrese su consulta</small>
                        <p v-if="v$.message.$error">Mensaje Invalido</p>
                    </div>
                    <button id="btnForm" class="btn btn-primary btn-lg px-4 border-primary">Enviar!</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import emailjs from "@emailjs/browser"
import { useVuelidate } from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'
export default {
    setup() {
        return { v$: useVuelidate() }
    },
    data() {
        return {
            email: "",
            name: "",
            message: ""
        }
    },
    validations: {
        email: { required, email },
        name: { required },
        message: { required }
    },
    methods: {
        submit() { // Cambio de nombre de método a "submit"
            if (this.v$.$invalid) {
                window.alert("Formulario inválido");
                return;
            }



            emailjs.sendForm('service_c2jbe85', 'template_j5ysu7q', this.$refs.form, '65U3gUdFV_lp5kx5e')
                .then((result) => {
                    console.log('SUCCESS!', result.text);
                }, (error) => {
                    console.log('FAILED...', error.text);
                });
        }
    }

}
</script>

<style scoped>
.btn:hover {
    background-color: #f28f0e !important;
    border-color: #f78d03 !important;
}

form {
    background: white;
}

label {
    margin-bottom: .5rem;
    text-align: right;
    display: block;
    letter-spacing: 2px;
    color: #adb5bd;
    text-transform: uppercase;
}

.form-control {
    border: none;
    background: none;
    border-bottom: 2px solid rgba(0, 0, 0, 0.2);
    transition: border-color .4s ease-out;
    border-radius: 0;
}

.form-control:active,
.form-control:focus,
.btn.focus,
.btn:focus {
    outline: none;
    box-shadow: none;
    border-color: black;
}

.form-control.valid {
    border-color: green;
}

.form-control.invalid {
    border-color: red;
}

.form-control+small {
    color: red;
    opacity: 0;
    height: 0;
    transition: opacity .4s ease-out;
}

.form-control.invalid+small {
    opacity: 1;
    height: auto;
    margin-bottom: 20px;
    transition: opacity .4s ease-out;
}

.btn {
    border: 2px solid black;
    padding: 0.375rem 2.75rem;
    text-transform: uppercase;
    font-weight: 900;
    border-radius: 0;
}

.btn:hover {
    color: white;
    background: black;
    transition: all .4s ease-out;
}
</style>