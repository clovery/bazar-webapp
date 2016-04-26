<template lang="jade">
.home
  h1 hola
</template>

<script>
import User from 'models/user'

export default {
  ready() {
    User.find()
  }
}
</script>
