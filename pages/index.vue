<script setup>
const nameInput = ref('')
const emailInput = ref('')
const teamInput = ref('')

const users = ref([])
users.value = await $fetch("/api/listUsers")

function submit() {
    $fetch("/api/addUser", {
        method: "POST",
        body: {
            name: nameInput.value,
            email: emailInput.value,
            team: teamInput.value
        }
    }).then(async () => {
        users.value = await $fetch("/api/listUsers")
    })
}

</script>

<template>
    <div>
        <h1
            class="text-center mb-4 mt-2 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl">
            Nuxt 3 SQLite DB
        </h1>
        <div class="m-4">
            <Input v-model="nameInput" type="text" placeholder="name" class="m-2" />
            <Input v-model="emailInput" type="text" placeholder="email" class="m-2" />
            <Input v-model="teamInput" type="text" placeholder="favorite team" class="m-2" />
            <br>
            <button @click="submit" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
        </div>

        <!-- list -->
        <div>
            <Card v-for="user in users" class="m-4">
                <CardHeader>
                    <CardTitle>{{ user.Name }}</CardTitle>
                    <CardDescription>{{ user.Email }}</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Favorite Team: {{ user.Team }}</p>
                </CardContent>
            </Card>
        </div>
    </div>
</template>