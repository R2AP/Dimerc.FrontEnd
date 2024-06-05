<template>
    <div class="container">
<!--     <form>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" placeholder="name@example.com" v-model="email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" v-model="password">
        </div>
        <div class="form-group">
            <button type="submit" class="btn btn-primary mb-3 mt-2">Submit</button>
        </div>
    </form> -->
        <div class="form-group">
            <button type="submit" class="btn btn-primary mb-3 mt-2" @click="loginGoogle">Login Google</button>
        </div>    
    </div>
</template>

<script lang="ts" setup>
    //import { ref } from "vue";
    import { GoogleAuthProvider, signInWithPopup, getAuth } from 'firebase/auth'

    // let email = ref("")
    // let password = ref("")

    const googleProvider = new GoogleAuthProvider()
    const auth = getAuth()

    const loginGoogle = () => {
        signInWithPopup(auth, googleProvider)
        .then((result)=>{
            const credential = GoogleAuthProvider.credentialFromResult(result)
            const token = credential?.accessToken
            alert("Éxito!!!") 
        })
        .catch((error)=>{
            alert("Login failed!!!") 
        })

    }

</script>