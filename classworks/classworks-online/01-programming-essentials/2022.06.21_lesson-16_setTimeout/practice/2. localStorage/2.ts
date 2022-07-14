/**
 * Задание 2.
 *
 * Сделать форму логина с сохранением данных в localStorage.
 */

const forms = () => {
    document.querySelector(".root")!.insertAdjacentHTML(
        "beforeend",
        `<form action=''>
			<p>
				<label>
					<span>User</span><br>
					<input name='user' type='text'>
				</label>
			</p>
			<p>
				<label>
					<span>Password</span><br>
					<input name='pass' type='password'>
				</label>
			</p>
			<p><button id='send' type='button'>Send</button> <button id='clear' type='button'>Clear</button></p>
		</form>`
    );

    const btnSend = document.getElementById("send")! as HTMLButtonElement;
    const btnClear = document.getElementById("clear")! as HTMLButtonElement;

    const inputUser = document.querySelector("[name='user']")! as HTMLInputElement;
    const inputPass = document.querySelector("[name='pass']")! as HTMLInputElement;
    btnSend.addEventListener("click", (e: MouseEvent) => {
        if (!localStorage.getItem("user")) {
            localStorage.setItem("user", inputUser.value);
        }
        if (!localStorage.getItem("pass")) {
            localStorage.setItem("pass", inputPass.value);
        }
    });

    btnClear.addEventListener("click", (e: MouseEvent) => {
        localStorage.removeItem("user");
        localStorage.removeItem("pass");
    });
};

forms();
