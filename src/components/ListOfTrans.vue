<template lang="pug">
    #list
        h2 Мы ремонтируем сварочные аппараты любых типов
        ul
          li(v-for="item in items")
             .mainCart
                .rotatePart
                    img(:src='item.src', :alt='item.name')
                    p {{ item.name }}
                .backRotate
                    p {{ item.descript }}
</template>

<script>
    export default {
        name: 'app',
        data () {
            return {
                items: [
                    { src: './src/assets/welders/argon-duga.jpg', name: 'Аппараты для аргонно-дуговой сварки', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/invertor.png', name: 'Инверторные сварочные аппараты', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/plastik-trub.jpg', name: 'Аппараты для сварки полиэтиленовых труб', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/plazmorez.jpg', name: 'Аппараты плазменной резки', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/point-svark.jpg', name: 'Споттеры (аппараты точечной сварки)', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/poluavtomat.jpg', name: 'Аппараты полуавтоматической сварки (полуавтоматы)', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/transformator.jpg', name: 'Трансформаторные аппараты', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { src: './src/assets/welders/vipramitel.jpg', name: 'Сварочные выпрямители', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'}
                ]
            }
        }
    }
</script>

<style lang="scss">
    #list{
        border: 1px solid #ccc;
        width: 100%;
        margin: 20px auto;
        background: url('../assets/light-back.jpg');
        background-color: #fff;
        background-size: contain;
        background-blend-mode: difference;

        li {
            list-style: none;
            width: 300px; height: 300px;
            perspective: 800px;

            .mainCart {
                background-color: #fff;
                border-radius: 3px;
                width: 300px; height: 300px;
                perspective: 800px;
                transition: transform 1s ease;
                position: relative;
                transform-origin: 50%;
                transform-style: preserve-3d;
            }

            .rotatePart {
                width: 300px;
                height: 300px;
                position: absolute;
                left: 0;
                top: 0;
                z-index: 2;
                backface-visibility: hidden;
            }

            .backRotate {
                transform: rotateX(180deg);
                position: absolute;
                left: 0;
                top: 25%;
                backface-visibility: hidden;
            }

            &:hover .mainCart {
                transform: rotateX(180deg);
            }

            img {
                max-width: 300px;
            }
        }
    }
</style>