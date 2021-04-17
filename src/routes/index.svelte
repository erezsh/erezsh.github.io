<svelte:head>
	<title>Erez Shinan's website</title>
</svelte:head>

<style>
	nav {
		background: rgb(238,238,238);
		background: linear-gradient(178deg, rgba(238,238,238,1) 0%, rgba(238,238,238,1) 47%, rgba(53,59,67,1) 48%);
		width: 100vw;
		height: 100vh;
	}

	.section {
		height: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	h1 {
		padding: 5% 10%;
		display: flex;
		justify-content: center;
	}
/*	h1:hover {
		border: #abcdef 10px solid;
		border-radius: 200px;
	}
*/	
	h1 a {
		font-size: 4vw;
	}

	.professional {
		color: #333;
	}

	.personal {
		color: #57cc8a;
	}
</style>

<main>
	<nav>
		<div class="section">
		<h1>
			<a href="professional" class="professional">Professional</a>
		</h1>
		</div>

		<div class="section">
		<h1>
			<a href="personal" class="personal">Personal</a>
		</h1>
		</div>
	</nav>
</main>

