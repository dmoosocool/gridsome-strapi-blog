<template>
  <Layout></Layout>
</template>

<page-query>
query($id: ID!) {
  strapiJournal(id: $id) {
    id
    title
    content
  }
}
</page-query>
<script>
export default {

}
</script>

<style>

</style>