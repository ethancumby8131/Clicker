document.addEventListener("DOMContentLoaded",()=>{
    Init()
})

async function Init() {

    const clickMe = document.querySelector('[data-el="click-me"]')
    const window = document.querySelector('[data-el="window"]')
    const reset = document.querySelector('[data-el="reset"]')

    const response = await fetch('http://127.0.0.1:5000/init')
    const data = await response.json()

    window.value = data.output

    clickMe.addEventListener("click", async ()=>{
        window.value = await Click()
        if(window.value == 69){
            window.style.color = "#e83a57"
        } else {
            window.style.color = "#000000"
        }
    })

    reset.addEventListener("click", async ()=>{
        window.value = await Reset()
    })
}


async function Click() {
    const response = await fetch('http://127.0.0.1:5000/click')

    const data = await response.json()

    return data.output
}

async function Reset(){
    const response = await fetch('http://127.0.0.1:5000/reset')

    const data = await response.json()

    return data.output
}
