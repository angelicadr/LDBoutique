# Importamos las librerías necesarias
import matplotlib.pyplot as plt # Para crear gráficos
import numpy as np              # Para generar datos de ejemplo

def generar_grafico_ventas():
    """
    Esta función genera un gráfico de barras simple
    y lo guarda como una imagen PNG.
    """
    print("Generando gráfico en Python...") # Mensaje para saber que el script se ejecuta

    # Datos de ejemplo: Ventas por Semestre
    categorias = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'] # Etiquetas para el eje X
    ventas = [60,71,83,64,76,68]    # Valores para el eje Y

    # Crear el gráfico de barras
    plt.figure(figsize=(8, 5)) # Define el tamaño de la figura (ancho, alto en pulgadas)
    plt.bar(categorias, ventas, color=['skyblue', 'lightcoral', 'lightgreen', 'gold', 'skyblue', 'lightcoral' ]) # Crea las barras

    # Añadir títulos y etiquetas
    plt.title('Ventas Semestre Anuales')  # Título del gráfico
    plt.xlabel('Semestre')                  # Etiqueta del eje X
    plt.ylabel('Ventas')         # Etiqueta del eje Y

    # Añadir una cuadrícula para mejor lectura
    plt.grid(axis='y', linestyle='--', alpha=0.7)

    # Guardar el gráfico como una imagen PNG
    # ¡Importante! Guardar en la misma carpeta donde estará tu archivo HTML para que la web lo encuentre.
    plt.savefig("ventas_semestre.png")
    plt.close() # Cierra la figura para liberar memoria

    print("Gráfico 'ventas_semestre.png' generado con éxito.")

# Llama a la función para generar el gráfico cuando se ejecuta el script
if __name__ == "__main__":
    generar_grafico_ventas()

#python generar_grafico.py