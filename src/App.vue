<template>
	<v-app id="inspire" :dark="darkMode">
		<v-navigation-drawer clipped fixed v-model="drawer" app>
			<v-list dense>
				<v-list-tile to="/">
					<v-list-tile-action>
						<v-icon>dashboard</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Home</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile to="/settings">
					<v-list-tile-action>
						<v-icon>settings</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Change Theme</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
				<v-list-tile to="/cards">
					<v-list-tile-action>
						<v-icon>credit_card</v-icon>
					</v-list-tile-action>
					<v-list-tile-content>
						<v-list-tile-title>Cards</v-list-tile-title>
					</v-list-tile-content>
				</v-list-tile>
			</v-list>
		</v-navigation-drawer>
		<v-toolbar app fixed clipped-left>
			<v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
			<v-toolbar-title>Application</v-toolbar-title>
		</v-toolbar>
		<v-content>
			<v-container fluid>
				<keep-alive>
					<router-view></router-view>
				</keep-alive>
			</v-container>
		</v-content>
		<!-- <v-footer app>
			<span>&copy; 2018</span>
		</v-footer> -->
	</v-app>
</template>

<script lang="ts" src="./App.ts"></script>

<style>
	@import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');

</style>
