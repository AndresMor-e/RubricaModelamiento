from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import subprocess
import os

app = FastAPI()

# Permitir peticiones desde cualquier origen (útil para desarrollo con frontend como React)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def raiz():
    return {"mensaje": "API de transparencia funcionando. Usa /transparencia/{lux}"}

@app.get("/transparencia/{lux}")
def obtener_transparencia(lux: float):
    try:
        # Ruta al directorio actual (donde está main.py y modelo.m)
        ruta_backend = os.path.dirname(os.path.abspath(__file__))

        # Convertir separadores a / para Octave
        ruta_octave = ruta_backend.replace(os.sep, "/")

        comando = [
            "octave",
            "--silent",
            "--eval",
            f"addpath('{ruta_octave}'); disp(modelo({lux}))"
        ]

        resultado = subprocess.run(
            comando,
            capture_output=True,
            text=True
        )

        if resultado.returncode != 0:
            return {"error": resultado.stderr.strip()}

        transparencia = float(resultado.stdout.strip())
        return {"lux": lux, "transparencia": round(transparencia, 2)}
    except Exception as e:
        return {"error": str(e)}

