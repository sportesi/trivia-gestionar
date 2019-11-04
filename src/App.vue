<template>
    <div id="app">
        <div class="container bebasNeue">
            <div class="row min-vh-100">
                <div class="col-12 align-self-start">
                    <div class="row pt-5">
                        <div class="col text-right text-uppercase">
                            <h1 class="text-light mega-text m-0">¿cuánto sabés?</h1>
                        </div>
                        <div class="col border-header">
                            <h1 class="m-0">
                                obtené el mayor puntaje
                                <br>
                                y ganate un viaje a colonia
                            </h1>
                        </div>
                    </div>
                </div>
                <div class="col-12 align-items-center">
                    <div class="row justify-content-center">
                        <router-view/>
                    </div>
                </div>
                <div class="col-12 align-self-end py-5">
                    <div class="row justify-content-center">
                        <div class="col text-center"><img src="./assets/images/logo-gestionar-01.png" class="img-logos">
                        </div>
                        <div class="col text-center"><img src="./assets/images/logo-gia-01.png" class="img-logos"></div>
                        <div class="col text-center"><img src="./assets/images/logo-emprade-01.png" class="img-logos">
                        </div>
                        <div class="col text-center"><img src="./assets/images/logo-ingnala-01.png" class="img-logos">
                        </div>
                        <div class="col text-center"><img src="./assets/images/logo-geas-01.png" class="img-logos">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

    export default {
        name: 'app',
    }
</script>

<style>
    @font-face {
        font-family: BebasNeue;
        src: url("assets/fonts/BebasNeue-Regular.otf") format("opentype");
    }

    .bebasNeue {
        font-family: BebasNeue, serif !important;
    }

    #app {
        background-image: url("assets/images/fondo-01.jpg");
        background-size: 100% 100%;
    }

    .border-header {
        border-left: 8px solid #00b8b0;
    }

    .mega-text {
        font-size: 80px;
    }

    .img-logos {
        width: 85%;
    }
</style>