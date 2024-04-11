body {
  font-family: 'Roboto', sans-serif;
  background-color: #f3f4f6;
  color: #333;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.container {
  background-color: #fff;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 40px;
  width: 400px;
  max-width: 90%;
  animation: fadeIn 0.5s ease-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(-20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

h1 {
  text-align: center;
  margin-bottom: 20px;
  font-size: 28px;
  color: #333;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
select {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  margin-top: 5px;
}

button {
  width: 100%;
  padding: 12px;
  background: linear-gradient(to right, #5f2c82, #49a09d);
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s;
}

button:hover {
  background: linear-gradient(to right, #ff5858, #f857a6);
}

.result {
  margin-top: 20px;
  font-size: 18px;
  text-align: center;
  animation: slideIn 0.5s ease-out;
}

.error {
  color: red;
  font-size: 14px;
  margin-top: 5px;
  text-align: center;
  animation: slideIn 0.5s ease-out;
}

@keyframes slideIn {
  0% {
    opacity: 0;
    transform: translateY(-10px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
