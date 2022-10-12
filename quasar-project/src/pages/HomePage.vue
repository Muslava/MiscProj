<template>
  <q-page class="flex flex-center">
    <div>
      Welcome Home {{ user }} {{ email }}
      <q-btn
        class="flex flex-center q-px-lg q-py-sm q-mb-md"
        size="md"
        label="Logout"
        @click="logout"
        color="primary"
      />
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import firebaseApp from 'boot/firebase'
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
const authf = getAuth(firebaseApp)

export default defineComponent({
  name: "HomePage",
  data () {
    return {
      user: '',
      email: ''
    }
  },
  created() {
    onAuthStateChanged(authf, (auth) => {
      if (auth) {
        this.user = auth.displayName
        this.email = auth.email
      } else {
        console.log('user name is null')
      }
    })
  },
  methods: {
    logout() {
      signOut()
      this.$router.push('/')
        .then(() => {
        this.$q.notify({message: 'Sign Out Success.'})
      })
      .catch(error =>  console.log('error',error))
    }
  }
})
</script>
