<template></template>

<script>
import db from "../firebase/init";
export default {
  name: "Header",
  data() {
    return {
      title: "Things I Hate"
    };
  },
  created() {
    db.collection("hated-things")
      .get()
      .then(response => {
        const documents = response.docs;
        documents.forEach(document => {
          console.log(document.data());
        });
      });
  }
};
</script>

<style>
</style>
