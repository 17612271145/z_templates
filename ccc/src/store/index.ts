import Vue from 'vue';
export let store =Vue.observable({
  isTransparent:false,
});
export let mutations={
  setNavsTransparent(isTransparent){
    store.isTransparent=isTransparent;
  }
};

export let action = {
  
}