import { Component, Vue } from 'vue-property-decorator';
import { EventBus } from '@/App';

@Component
export default class About extends Vue {
	changeTheme() {
		// console.log('Sent event: changeTheme')
		EventBus.$emit('changeTheme')
	}
}