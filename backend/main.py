from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import subprocess

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/transparencia/{lux}")
def obtener_transparencia(lux: float):
    try:
        comando = [
            "octave",
            "--silent",
            "--eval",
            f"addpath('C:/Users/amore/OneDrive/Documentos/U/Modelamiento/RubricaModelamiento/backend'); disp(modelo({lux}))"
        ]

        resultado = subprocess.run(
            comando,
            capture_output=True,
            text=True
        )

        if resultado.returncode != 0:
            return {"error": resultado.stderr}

        transparencia = float(resultado.stdout.strip())
        return {"lux": lux, "transparencia": round(transparencia, 2)}
    except Exception as e:
        return {"error": str(e)}
