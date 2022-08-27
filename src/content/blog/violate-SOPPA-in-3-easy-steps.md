---
title: Violate SOPPA in 3 easy steps!
date: 2022-08-26T06:30:00Z
description: . . .
tags:
    - privacy
    - soppa
    - random
draft: true
---

<script lang="ts">
    let name: string = "";
    let email: string = "";

    const validEmail = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/; // Regex for valid emails

    const onClick = () => {
        // if (!email.match(validEmail)) {
        //     alert("Email field must be a valid email!")
        //     return
        // }
    };

</script>

<div class="grid grid-cols-11 space-y-2">
    <input
        type="text"
        placeholder="username"
        bind:value={name}
        class="col-start-5 col-span-3"
    />
    <input 
        type="email" 
        placeholder="email" 
        bind:value={email}
        class="col-start-5 col-span-3" 
    />
    <button       
        on:click={onClick}
        id="btn"
        class="col-start-5 col-span-3"
    >
        <span>Violate SOPPA!</span>
    </button>

</div>
