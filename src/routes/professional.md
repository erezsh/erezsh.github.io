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
		margin: 60px 0;
		color: black;
		text-shadow: -1px -1px 8px rgb(150 150 150 / 56%);
	}
	h1:before {
		content: "> ";
	}

	h2 {
		margin: 40px 0;
	}

	h1, h2, h3, h4, h5, h6 {
	    font-family: "PT Sans", Helvetica, Arial, sans-serif;
	    font-weight: 700;
	    line-height: 1.5em;
	}

	.project {
		margin-top: 30px;
		margin-left: 10px;
		display: flex;
		border-top: 1px solid #DDD;
		align-items: center;
		gap: 40px;
	}
	.project > a {
		font-size: 1.5em;
		color: #44a;
		font-weight: bold;
		text-decoration: none;
		min-width: 150px;
		text-align: right;
	}

	li {
		list-style: url(/star3.png);
	}

	nav a {
		text-decoration: none;

	}
</style>

<ProfessionalPage>

<nav>

[about](#about) | [public works](#public-works) | [more information](#more-information)

</nav>

# About

I'm a polymathic software engineer, practicing professionally since 2008.

I have found myself often in the role of team leader or project leader.

I'm particularly interested in:
- **Programming languages**, because I believe that language is intertwined with our way of thinking about the world, and new languages provide us with new ways to think about our problems.
- **Static analysis**, because it's like math but for code.
- **Neural Networks**, because their potential is fascinating.

I usually work for start-ups, and in my spare time contribute to open-source.

## Expertise
	- Software Design & Architecture
	- Static Analysis
	- Machine Learning
	- Parsing & DSLs
	- Security

- Programming Languages: Python, C, Julia, SQL, Javascript, HTML & CSS, and more...

- Languages: English, Hebrew


# Public Works

The following is a list of projects I created and actively maintain:

<div class="project">
	<a href="https://github.com/lark-parser/Lark">
		<img src="/lark-logo.png" width="150" style="margin-bottom: -20px"/>
	</a>
	<div>

	Lark is a general-purpose parsing toolkit for Python.

	It is, arguably, the most popular parser in the Python ecosystem.

	<iframe src="https://ghbtns.com/github-btn.html?user=lark-parser&repo=lark&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>
	</div>
</div>

<div class="project">
	<a href="https://github.com/erezsh/Preql">
		<img src="/preql.png" width="150"/>
	</a>
	<div>

	Preql is a relational programming language that compiles to SQL.

	It ventures to change the way programmers interface with databases.


	<iframe src="https://ghbtns.com/github-btn.html?user=erezsh&repo=preql&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>

	</div>
</div>

<div class="project">
	<a href="https://github.com/erezsh/Runtype">
		<img src="/runtype-logo.png" width="150">
	</a>
	<div>

	Brings multiple-dispatch and runtime type-safety to Python

	<iframe src="https://ghbtns.com/github-btn.html?user=erezsh&repo=runtype&type=star&count=true" frameborder="0" scrolling="0" width="150" height="20" title="GitHub"></iframe>

	</div>
</div>

<br/>
<br/>
<br/>
More projects and details at <a href="https://github.com/erezsh/">my Github page</a>


# More information

- [Resume](/Resume_2018.pdf)
- [Blog](http://blog.erezsh.com) (rarely updated)
- Art
	- [parrot](/parrot) - drawn entirely with CSS borders
	- [candy](/candybg.html) - random-generated "sci-fi" background
	- [lock](/lock/lock.html) - demonstration of tactile UI

</ProfessionalPage>