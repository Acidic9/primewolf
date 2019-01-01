import { Vue, Component, Model, Prop, Watch } from 'vue-property-decorator'

@Component({
	delimiters: ['{{', '}}'],
	comments: false,
	components: null,
	directives: null,
	filters: null,
	inheritAttrs: true,
})
export default class RouletteBar extends Vue {
	// Interface
	@Model('change', { type: Boolean }) checked!: boolean

	@Prop(Number) propA!: number

	// Local State
	dataA = 'foo'

	get computedA() {
		return 'foo'
	}

	// Events
	@Watch('child')
	onChildChanged(newValue: string, oldValue: string) { }

	beforeCreate() { }

	created() { }

	beforeMount() { }

	mounted() { }

	beforeUpdate() { }

	updated() { }

	activated() { }

	deactivated() { }

	beforeDestroy() { }

	destroyed() { }

	// Non-Reactive Properties
	methodA() { }
}
