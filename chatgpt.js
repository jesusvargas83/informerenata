
const API_KEY='sk-proj-bAksOvwGfsj7lJYes720T3BlbkFJcTufsfU52DMLjbTi8VdQ';
const form= document.getElementById('chat-form')//$("#");
const mytextInput = document.getElementById('myText');
const responseTextarea = document.getElementById('response');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const mytext = mytextInput.value.trim();

    if(mytext){
        try{
            const response = await fetch('https://api.openai.com/v1/chat/completions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${API_KEY}`
                },
                body: JSON.stringify({
                    model: 'gpt-4',
                    messages: [{ role: 'user', content: mytext}],
                    temperature: 1.0,
                    n:1,
                    stream: false,
                    presence_penalty:0,
                    frequency_penalty: 0
                })

            });

            if(response.ok){
                const data = await response.json();
                responseTextarea.value = data.choices[0].message.content;
            }
            else{
                responseTextarea.value = "Se produjo un error al realizar la pregunta!"
            }
        }
        catch(error){
            console.log("error:"+ error);
            responseTextarea.value = "Se produjo un error al realizar la pregunta!"
        }
    }
})