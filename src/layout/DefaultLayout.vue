<template>
	<div class="default">
		<!--Header-->
		<Header></Header>
		<!--main-->
		<main class="main-section">
		<slot name="content"></slot>				
		</main>
		<!--Footer-->
		<Footer></Footer>
	</div>
</template>

<script >
import Header from '@/partials/Header'
import Footer from '@/partials/Footer'

export default{
	name:'DefaultLayout',
	components:{
		Header,
		Footer
	}
}
	
</script>