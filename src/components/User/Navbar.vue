<template>
  <div class="navbar">
    <div @click="$router.push('/')"><strong>App</strong></div>
    <div class="navbar__btns">
      <button class="navbar__btn" @click="$router.push('/about')">About</button>
      <button class="navbar__btn" @click="$router.push('/todos')">Todos</button>
      <button class="navbar__btn" @click="$router.push('/store')">Store</button>
      <button class="navbar__btn" @click="$router.push('/composition')">
        Composition
      </button>
      <button class="navbar__btn" @click="$router.push('/examples')">
        Examples
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: #408080;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 30px;
}
.navbar__btns {
  margin-left: auto;
}
.navbar__btn {
  border: 2px solid #000000;
  margin-left: 20px;
  padding: 5px;
  height: 30px;
  background-color: peru;
}
</style>
