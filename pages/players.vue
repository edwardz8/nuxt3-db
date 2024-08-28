<script setup>
const playerInput = ref('')
const teamInput = ref('')
const positionInput = ref('')
const rushAttemptsInput = ref('')
const rushYardsInput = ref('')
const rushTDInput = ref('')
const recInput = ref('')
const recYardsInput = ref('')
const recTDInput = ref('')
const pointsInput = ref('')

const flexPlayers = ref([])
flexPlayers.value = await $fetch("/api/listPlayers")

function addPlayer() {
    $fetch("/api/addPlayer", {
        method: "POST",
        body: {
            Player: playerInput.value,
            Team: teamInput.value,
            POS: positionInput.value,
            ATT: rushAttemptsInput.value,
            RUSHYDS: rushYardsInput.value,
            RUSHTDS: rushTDInput.value,
            REC: recInput.value,
            RECYDS: recYardsInput.value,
            RECTDS: recTDInput.value,
            FPTS: pointsInput.value
        }
    }).then(async () => {
        flexPlayers.value = await $fetch("/api/listPlayers")
    })
}

</script>

<template>
    <div>
        <h1
            class="text-center mb-4 mt-2 text-xl font-bold leading-none tracking-tight text-gray-900 md:text-xl lg:text-xl">
            Nuxt 3 SQLite FantasyFootball DB
        </h1>
        <div class="m-4">
            <Input v-model="playerInput" type="text" placeholder="Player Name" class="m-2" />
            <Input v-model="teamInput" type="text" placeholder="Team" class="m-2" />
            <Input v-model="positionInput" type="text" placeholder="Player Position" class="m-2" />
            <Input v-model="rushAttemptsInput" type="text" placeholder="Rush Attempts" class="m-2" />
            <Input v-model="rushYardsInput" type="text" placeholder="Rushing Yards" class="m-2" />
            <Input v-model="rushTDInput" type="text" placeholder="Rushing Touchdowns" class="m-2" />
            <Input v-model="recInput" type="text" placeholder="Receptions" class="m-2" />
            <Input v-model="recYardsInput" type="text" placeholder="Reception Yards" class="m-2" />
            <Input v-model="recTDInput" type="text" placeholder="Reception Touchdowns" class="m-2" />
            <Input v-model="pointsInput" type="text" placeholder="Fantasy Points Projection" class="m-2" />
            <br>
            <button @click="addPlayer" type="button" class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add</button>
        </div>

        <!-- list -->
       <div>
            <Card v-for="player in flexPlayers" class="m-4">
                <CardHeader>
                    <CardTitle>{{ player.Player }}</CardTitle>
                    <CardDescription>{{ player.Team }}</CardDescription>
                    <CardDescription>{{ player.POS }}</CardDescription>
                </CardHeader>
                <div class="flex">
                    <CardContent>
                        <p>Rushing Attempts: {{ player.ATT }}</p>
                        <p>Rushing Yards: {{ player.RUSHYDS }}</p>
                        <p>Rushing TD: {{ player.RUSHTDS }}</p>
                    </CardContent>
                    <CardContent>
                        <p>Receptions: {{ player.REC }}</p>
                        <p>Reception Yards: {{ player.RECYDS }}</p>
                        <p>Reception TD: {{ player.RECTDS }}</p>
                    </CardContent>

                </div>
            </Card>
        </div>
    </div>
</template>