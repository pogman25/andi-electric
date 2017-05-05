<template lang="pug">
    #list
        h2 Мы ремонтируем сварочные аппараты любых типов
        transition-group(tag="ul" name="list" appear mode="in-out")
          li(v-for="item in items" v-bind:key="item.id" v-bind:class='"element"+item.id')
              .mainCart
                .rotatePart
                    img(:src='item.src', :alt='item.name')
                    p {{ item.name }}
                .backRotate
                    p {{ item.descript }}
</template>

<script>
    export default {
        name: 'vue-list',
        data () {
            return {
                items: [
                    { id: 1, src: './src/assets/welders/argon-duga.jpg', name: 'Аппараты для аргонно-дуговой сварки', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 2, src: './src/assets/welders/invertor.png', name: 'Инверторные сварочные аппараты', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 3, src: './src/assets/welders/plastik-trub.jpg', name: 'Аппараты для сварки полиэтиленовых труб', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 4, src: './src/assets/welders/plazmorez.jpg', name: 'Аппараты плазменной резки', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 5, src: './src/assets/welders/point-svark.jpg', name: 'Споттеры (аппараты точечной сварки)', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 6, src: './src/assets/welders/poluavtomat.jpg', name: 'Аппараты полуавтоматической сварки (полуавтоматы)', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 7, src: './src/assets/welders/transformator.jpg', name: 'Трансформаторные аппараты', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'},
                    { id: 8, src: './src/assets/welders/vipramitel.jpg', name: 'Сварочные выпрямители', descript: 'Способ дуговой сварки в защитных газах заключается в том, что в зону дуги поступает защитный газ. Выделяемое дугой тепло расплавляет основной металл и электрод.'}
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
        box-shadow: 20px 20px 25px rgba(0, 0, 0, 0.5);

        h2 {
            font-weight: bold;
        }

        li {
            list-style: none;
            width: 300px; height: 300px;
            perspective: 800px;

            .mainCart {
                background-color: #fff;
                border-radius: 3px;
                width: 300px; height: 300px;
                perspective: 800px;
                transition: transform 0.7s ease-in-out;
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

        .list-enter-active {
            transition: all 1s cubic-bezier(.5, -1, .5, 2);
        }
        .list-enter {
            opacity: 0;
            transform: rotateY(90deg);
        }
        @for $i from 1 to 9 {
            .element#{$i} {
            transition-delay: $i*300+ms;
        }
        }
    }
</style>