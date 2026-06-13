function correta() {
            const result = document.querySelectorAll(".but");
            let score = 0;

            result.forEach(input => {
                const correct = Number(input.dataset.correct);
                const user = Number(input.value);
                if(user == correct){
                    score++;
                }
                
                document.getElementById("score").textContent = 
                    `${score}/${result.length}`;
            })
        }