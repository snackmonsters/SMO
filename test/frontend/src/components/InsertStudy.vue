<template>
    <v-app id = "insertStudy">
        <v-content>
            <h1>Study Insert Test Page</h1>
            <v-form>
                <v-row>
                    <v-col>
                        <v-text-field label = "title"></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-btn>등록</v-btn>
                    </v-col>
                </v-row>
            </v-form>
        </v-content>
    </v-app>
</template>

<script>
export default {
    name: 'InsertStudy'
}
</script>