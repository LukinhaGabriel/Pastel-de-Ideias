<style>
@import url("../assets/css/Page/index.css");
</style>

<script lang="ts" setup>
    import { PhImage } from '@phosphor-icons/vue';

    useSeoMeta({
        title: 'Cadastro',
        ogTitle: 'Cadastro',
        description: `Projeto "Pastel de Ideias", 
            onde o usuário pode criar um cardápio para sua pastelaria. #DeuFome`,
        ogDescription: `Projeto "Pastel de Ideias", 
            onde o usuário pode criar um cardápio para sua pastelaria. #DeuFome`,
    });
</script>


<template>
    <main>
        <img class="logo-img" src="../assets/images/logo/Logo.svg" alt="Pastel de Ideias">
        <div id="pastel" class="card">
            <header class="card__navbar">
                <h2 class="title">Monte aqui o seu cardápio. O que está esperando?</h2>

                <div class="wrapper-switch">
                    <span>Comida</span>
                    <label class="switch">
                        <input type="checkbox" checked>
                        <span class="slider round"></span>
                    </label>
                    <span>Bebida</span>
                </div>
            </header>
            <form action="" class="register">
                <fieldset class="group">
                    <input type="text" class="group__field-title" placeholder="Título do pedido" required>
                    <input type="text" class="group__field-sabor" placeholder="Sabor" required>
                    <input type="number" class="group__field-price" placeholder="R$" required>
                </fieldset>

                <textarea name="" id="" cols="30" rows="4" placeholder="Descrição" class="field-description"></textarea>

                <div class="wrapper-uploader">
                    <input type="file" id="file-upload" class="field-uploader" alt="Preview" accept="image/*"/>
                    <label for="file-upload" id="file-drag">
                        <img id="file-image"  alt="Preview" class="hidden">
                        <div id="start">
                            <ph-image :size="58" aria-hidden="true" class="ph-image" />
                            <span>Jogue aqui o arquivo de imagem do seu pastel ou clique para localizar a pasta.</span>
                            <div id="notimage" class="hidden">Please select an image</div>
                        </div>
                    </label>
                </div>

                <div class="button-list">
                    <button type="submit" class="button -clear">Limpar</button>
                    <button type="submit" class="button -register">Cadastrar</button>
                </div>
            </form>
        </div>
    </main>
</template>


