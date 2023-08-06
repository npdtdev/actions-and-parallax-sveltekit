<script lang="ts">
	import { ukiyo } from '$lib/ukiyo';
</script>

<div>
	<h1>How I use actions to achieve parallax images with Sveltekit</h1>
	<p>
		See the full post at <a
			href="https://www.npdt.dev/en/blog/post/how-i-use-actions-to-achieve-parallax-images-with-sveltekit"
			>npdt.dev</a
		>
	</p>
	<iframe src={'https://gist.github.com/npdtdev/639e0aa75850251ee3c313e500c8504d.pibb'} />
	<div>
		<img
			use:ukiyo={{
				scale: 1.2
			}}
			src={'https://source.unsplash.com/random/500x500'}
		/>

		<img
			use:ukiyo={{
				scale: 1.4,
				speed: 1.1
			}}
			src={'https://source.unsplash.com/random/400x400'}
		/>
		<img use:ukiyo={{}} src={'https://source.unsplash.com/random/600x400'} />
	</div>
</div>

<style>
	h1 {
		font-size: xx-large;
	}
	img {
		margin-bottom: 4rem;
	}
	iframe {
		width: 100%;
		height: 420px;
		margin-bottom: 4rem;
	}
</style>
