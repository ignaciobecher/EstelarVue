<template>
    <div class="container ">
        <div class="row ">
            <div class="col-12 col-md-8 mx-md-auto mt-5 text-center">
                <h1 class="mb-4"> Contacto</h1>
                <form class="px-2 px-sm-5 py-5 rounded">
                    <div class="form-group">
                        <label for="phone">Nombre</label>
                        <input type="text" class="form-control" id="phone" placeholder="Ingrese su nombre">
                        <small id="phoneHelp" class="form-text"></small>
                    </div>
                    <div class="form-group">
                        <label for="email">Email</label>
                        <input type="text" class="form-control" id="email" placeholder="Ingrese su mail">
                        <small id="emailHelp" class="form-text">Ingrese su email</small>
                    </div>
                    <div class="form-group">
                        <label for="username">Consulta</label>
                        <input type="text" class="form-control" id="username" placeholder="Ingrese su consulta">
                        <small id="usernameHelp" class="form-text">Ingrese su consulta</small>
                    </div>
                    <button id="btnForm" class="btn btn-primary btn-lg px-4 border-primary">Enviar!</button>
                </form>
            </div>
        </div>
    </div>
</template>

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