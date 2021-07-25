<template>
  <div class="home">
    <h1>{{ !loggedIn ? 'Login or Register' : 'Welcome Home!' }}</h1>

    <div class="card">
      <div class="card-body">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel
          exercitationem atque, suscipit nam veritatis culpa nesciunt totam ea?
          Placeat fuga molestiae accusamus reprehenderit corrupti possimus eius
          nulla magnam, explicabo atque dolore deleniti sed nemo. Quisquam
          explicabo distinctio nam? Doloremque iste minima suscipit! Ducimus,
          commodi? Voluptates maxime facilis quasi at maiores veniam iusto,
          veritatis voluptate doloremque aliquam qui tempore quos? Placeat cum
          perferendis non animi iusto odit? Commodi deserunt animi, nemo ad
          praesentium impedit quos. Voluptas totam cumque numquam provident
          recusandae, quasi ipsa beatae iste aliquid architecto est nam ea cum?
          Atque accusantium quis aut mollitia deserunt dolor aspernatur,
          molestiae officia sit vitae nemo praesentium quos impedit repellat
          natus consequuntur possimus quae consequatur fugit! Error fugit enim
          deserunt eum vero, temporibus earum optio omnis quas sit repellendus
          obcaecati iusto maiores mollitia architecto ad quasi impedit quisquam
          explicabo aspernatur! Delectus aut cupiditate deleniti, enim esse
          numquam sunt ea cum labore! Unde quaerat pariatur, reprehenderit
          quisquam nulla in cumque at repudiandae molestias maiores et modi quia
          corporis ipsum recusandae aut earum vitae nisi consectetur totam
          commodi perferendis doloribus laboriosam? Voluptas aliquam tenetur
          quasi vel saepe, culpa earum corporis labore facilis dicta eum autem
          soluta, dolores unde molestias odit ipsam illo obcaecati. Rem,
          temporibus.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Home',
  computed: {
    loggedIn() {
      return this.$store.state.auth.status.loggedIn
    }
  }
})
</script>
