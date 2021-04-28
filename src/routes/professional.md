---
domain: Professional
---

<script lang="ts">
	import ProfessionalPage from '$lib/ProfessionalPage.svx';
</script>

<style>

	h1>a, h2> a, h3 > a, h4 > a {
		color: #333;
		text-decoration: none;
	}
	h1>a:hover, h2>a:hover, h3>a:hover, h4>a:hover {
		text-decoration: underline;
	}

	h1 {
		margin-top: 50px;
	}
	h1, h2, h3, h4, h5, h6 {
	    font-family: "PT Sans", Helvetica, Arial, sans-serif;
	    font-weight: 700;
	    line-height: 1.5em;
	}

	.project {
		margin-bottom: 90px;
		margin-left: 20px;
	}
	.project > a {
		font-size: 1.5em;
		color: #44a;
		font-weight: bold;
		text-decoration: none;
	}

	li {
		list-style: url(/star3.png);
	}
</style>

<ProfessionalPage>


# Public Projects

<div class="project">
	<a href="https://github.com/erezsh/Preql">
		<img src="/preql.png" width="150"/>
	</a>

	Preql is a relational programming language that compiles to SQL.

	It ventures to change the way programmers interface with databases.
</div>

<div class="project">
	<a href="https://github.com/lark-parser/Lark">
		<img src="/lark-logo.png" width="150" style="margin-bottom: -20px"/>
	</a>

	Lark is a general-purpose parsing toolkit for Python.

	It is, arguably, the most popular parser in the Python ecosystem.
</div>

<div class="project">
	<a href="https://github.com/erezsh/Runtype">Runtype</a>

	Brings multiple-dispatch and runtime type-safety to Python
</div>

<a class="project" href="https://github.com/erezsh/">More...</a>

# About

I'm a polymathic software engineer, practicing professionally since 2008.

I'm particularly interested programming languages, because I believe that language is intertwined with our way of thinking about the world, and new languages provide us with new ways to think about our problems.

I usually work for start-ups, and in my spare time contribute to open-source.

## Expertise
	- Software Design & Architecture
	- Static Analysis
	- Machine Learning
	- Parsing & DSLs
	- Security

- Programming Languages: Python, C, Julia, SQL, Javascript, HTML & CSS, and more...

- Languages: English, Hebrew


## More information

- [Resume](/Resume_2018.pdf)
- [Blog](http://blog.erezsh.com) (rarely updated)
- Art
	- [parrot](/parrot) - drawn entirely with CSS borders
	- [candy](/candybg.html) - random-generated "sci-fi" background
	- [lock](/lock/lock.html) - demonstration of tactile UI

</ProfessionalPage>