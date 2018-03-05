import { Component, Vue } from 'vue-property-decorator';

export default class Cards extends Vue {
	cards = [
		{ title: 'Pre-fab homes', src: 'https://vuetifyjs.com/static/doc-images/cards/house.jpg', flex: 12 },
		{ title: 'Favorite road trips', src: 'https://vuetifyjs.com/static/doc-images/cards/road.jpg', flex: 6 },
		{ title: 'Best airlines', src: 'https://vuetifyjs.com/static/doc-images/cards/plane.jpg', flex: 6 }
	]
}