<template>
  <div>
    <div class="input-wrapper" :class="{'input-wrapper--warning':warning, 'input-wrapper--noLabel': label == false}">
      <p v-if="title" class="title">{{title}}</p>
      <input
        @focus="$emit('v-focus')" 
        @blur="$emit('v-blur')"
        class="input"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        type="text"
        required
        :placeholder="label"
      />
      <img class="input-warning" src="/images/icons/error.png" alt="">
    </div>
    <p class="input-warning-text" :class="{'input-warning-text--show':warning}">{{warning}}</p>
  </div>
</template>

<script>
  export default {
    name: 'BaseInput',
    props: {
      modelValue: String,
      label: {
        type: String,
        default: '',
      },
      borderRadius: {
        type: String,
        default: '4px',
      },
      warning:{
        type: [Boolean, String],
        default: false,
      },
      type: {
        type: [String],
        default: "",
      },
      title: {
        type: String,
        default: "",
      }
    },
    data() {
      return {
        valueToShow: "",
      }
    },
    created(){
      this.valueToShow = this.modelValue
    },
    methods:{
    },
  }
</script>
<style lang="scss" scoped>
  $background: transparent;
  .input {
    user-select: text;
    font-family: 'Halvar';
    padding: 0 4px 0 8px;
    font-size: inherit;
    width: 100%;
    height: 40px;
    border: 1px solid #DDD;
    color: inherit;
    border-radius: 4px;
    // user-select: none !important;
    user-select: text !important;
    position: relative;
    background: $background;
    font-size: 18px;
    @include baseText;
    // margin-bottom: 10px;
    &::placeholder{
      color: #A9A9A9;
    }
    &:hover{
      border: 1px solid $primary;
    }
    &:focus{
      border: 1px solid $primary;
    }
    &-warning{
      position: absolute;
      right: 0;
      top: 0;
      height: 100%;
      width: 100%;
      width: auto;
      transform: scale(0.4);
      display: none;
      &-text{
        
        color: #f24e06;
        font-size: 14px;
        font-weight: 400;
        font-family: 'Halvar';
        padding: 2px 0px;
        opacity: 0;
        pointer-events: none;
        width: 100%;
        text-align: right;
        @include baseText;
        font-size: var(--xs-text-size);
        &--show{
          opacity: 1;
          pointer-events: all;
        }
        
      }
    }
  }
  .input-wrapper {
    position: relative;
    height: auto;
    width: 100%;
    border-radius: v-bind(borderRadius);
    font-size: inherit;
    background: $background;
    color: #2c3e50;
    
    &--warning{
      .input{
        border: 2px solid #f24e06;
        &-warning{
          display: block;
        }
      }
    }
    &--noLabel{
      .input{
      }
    }
    .input:focus,
    .input:valid {
      & + .label {
        top: 3px;
        left: -1px;
        height: 35%;
        background: transparent;
        font-size: 0.7em;
        padding: 4px 8px 4px 2px;
      }
    }
    .label {
      cursor: text;
      pointer-events: none;
      font-size: inherit;
      font-family: inherit;
      position: absolute;
      left: 0;
      top: 0;
      height: 100%;
      display: flex;
      align-items: center;
      margin-left: 20px;
      transition: font-size, 0.2s;
      background: transparent;
      user-select: text !important;
      color: #a2a2a2;
      font-family: 'Halvar';
      font-size: 18px;
    }
  }

  .title{
    font-size: 14px;
    color: $black;
    opacity: 0.5;
    margin-bottom: 4px;
  }
</style>
