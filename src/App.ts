import { Component, Vue } from 'vue-property-decorator';

@Component({

})
export default class App extends Vue {

	drawer: boolean = true
	darkMode: boolean = true

	changeTheme() {
		this.darkMode = !this.darkMode
	}

	created() {
		EventBus.$on('changeTheme', () => {
			// console.log('Received event: changeTheme')
			this.changeTheme()
		})
	}

}

export const EventBus = new Vue()