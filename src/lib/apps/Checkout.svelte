<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from '$lib/components/Button.svelte';
	import Card from '$lib/components/Card.svelte';
	import CardBody from '$lib/components/CardBody.svelte';
	import CardHeader from '$lib/components/CardHeader.svelte';
	import CardSelected from '$lib/components/CardSelected.svelte';
	import Col from '$lib/components/Col.svelte';
	import Paragraph from '$lib/components/Paragraph.svelte';
	import Row from '$lib/components/Row.svelte';
	import { createEventDispatcher } from 'svelte';
	import { CardFooter, Input, Radio } from '$lib/components';
	import FormGroup from '$lib/components/FormGroup.svelte';
	import Divider from '$lib/components/Divider.svelte';
	import BuyerProtection from '$lib/components/BuyerProtection.svelte';
	export let textSippingAddress = 'Your Shipping address';
	export let textSippingAddressButton = 'Add new Address';
	export let textPaymentMethod = 'Payment Method';
	export let textOrderSummary = 'Order Summary';
	export let textBuyerProtection = 'Buyer protection';
	export let textShippingEdit = 'Edit';
	export let shippingAddress = [];
	export let showAll = false;
	export let payment = {
		cardNumber: '',
		expDate: '',
		cvv: '',
		method: 2
	};
	export let buyerProtectionData = [
		"Full refund if you dont't receive your order",
		'Full or Partial Refund, if the prodjuct is not as described in details'
	];
	const dispatch = createEventDispatcher();
	import imgBuyer from '$lib/assets/buyer-protection.png';
	import List from '$lib/components/List.svelte';
	import OrderSummary from '$lib/components/OrderSummary.svelte';
	import OrderSummaryItem from '$lib/components/OrderSummaryItem.svelte';
	import GroupLeftRight from '$lib/components/GroupLeftRight.svelte';
	import Sticky from '$lib/components/Sticky.svelte';
</script>

<div class="Checkout">
	<Row>
		<Col xs="12" sm="8">
			<Card shadow>
				<CardHeader spaceBetween alignCenter>
					{textSippingAddress}
					<Button on:click={() => dispatch('addAddress')} icon="fa fa-plus" shadow
						>{textSippingAddressButton}</Button
					>
				</CardHeader>
				<CardBody>
					<CardSelected rows={shippingAddress} let:item let:selected selected="2" {showAll}>
						<div class:selected transition:slide>
							<Card border>
								<CardBody>
									<Paragraph>{item.address}</Paragraph>
									<Paragraph>{item.town}</Paragraph>
									<Paragraph>{item.state}</Paragraph>
									<Paragraph>{item.country}</Paragraph>
									<Paragraph>{item.phone}</Paragraph>
								</CardBody>
							</Card>
						</div>
						<a href="/" slot="footer">{textShippingEdit}</a>
					</CardSelected>
				</CardBody>
			</Card>
			<Card shadow class="mt-4">
				<CardHeader>
					{textPaymentMethod}
				</CardHeader>
				<CardBody>
					<Radio
						on:change={() => (payment.method = 1)}
						checked={payment.method === 1}
						class="mb-2"
						name="payment"
						label="Credit card"
						value="1"
					/>
					<FormGroup label="Card number">
						<Input bind:value={payment.cardNumber} placeholder="**** **** **** ****" />
					</FormGroup>
					<FormGroup label="Exp Date">
						<Input bind:value={payment.expDate} placeholder="mm/yyyy" />
					</FormGroup>
					<FormGroup label="CVV">
						<Input bind:value={payment.cvv} placeholder="123" />
					</FormGroup>
					<Radio
						on:change={() => (payment.method = 2)}
						checked={payment.method === 2}
						class="mb-2"
						name="payment"
						label="Paypal"
						value="2"
					/>
					<Divider />
					<BuyerProtection
						image={imgBuyer}
						title={textBuyerProtection}
						data={buyerProtectionData}
					/>
				</CardBody>
			</Card>
			<slot name="left" />
		</Col>
		<Col xs="12" sm="4">
			<Sticky>
				<Card shadow>
					<CardHeader spaceBetween alignCenter>
						{textOrderSummary}
						<Button icon="fa fa-pen" on:click={() => dispatch('edit')} />
					</CardHeader>
					<CardBody>
						<OrderSummary>
							<OrderSummaryItem
								title="Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD) x 3"
								description="16GB RAM, 1TB SSD Hard Drive, 10-core Intel Xeon, Mac OS, Secured"
								price="7197€"
							/>
							<OrderSummaryItem
								title="Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD) x 3"
								description="16GB RAM, 1TB SSD Hard Drive, 10-core Intel Xeon, Mac OS, Secured"
								price="7197€"
							/>
							<OrderSummaryItem
								title="Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD) x 3"
								description="16GB RAM, 1TB SSD Hard Drive, 10-core Intel Xeon, Mac OS, Secured"
								price="7197€"
							/>
							<OrderSummaryItem
								title="Apple iMac Pro (27-inch with Retina 5K Display, 3.0GHz 10-core Intel Xeon W, 1TB SSD) x 3"
								description="16GB RAM, 1TB SSD Hard Drive, 10-core Intel Xeon, Mac OS, Secured"
								price="7197€"
							/>
							<GroupLeftRight paddingTop paddingBottom left="SubTotal" right="3111€" />
							<GroupLeftRight paddingTop paddingBottom left="Shipping" right="9000€" />
							<GroupLeftRight paddingTop paddingBottom left="Total" right="40000€" />
						</OrderSummary>
					</CardBody>
					<CardFooter>
						<GroupLeftRight left="Payable Total" right="40000€" />
					</CardFooter>
				</Card>
				<slot name="right" />
			</Sticky>
		</Col>
	</Row>
</div>

<style lang="scss">
	.selected {
		:global(.Card) {
			border-color: red;
		}
	}
</style>
