export const Acerca = () => {
    return (
        <div className="container py-5">
            <h1 className="text-center font-semibold mb-4">Acerca de Smart Glass</h1>
            <div className="row align-items-center">
                <div className="col-md-6">
                    <p className="lead text-body-secondary">
                        Bienvenidos a Smart Glass, una solución innovadora diseñada para mejorar la eficiencia energética y el confort visual mediante el uso de vidrios inteligentes.
                    </p>
                    <p>
                        Nuestro sistema permite controlar automáticamente la transparencia u opacidad de un vidrio en función de la intensidad de la luz ambiental. Esto no solo reduce el consumo energético, sino que también mejora la experiencia visual en diferentes condiciones de iluminación.
                    </p>
                    <p>
                        Con aplicaciones prácticas en edificios inteligentes, vehículos, y dispositivos electrónicos, Smart Glass es una herramienta versátil que combina tecnología avanzada con facilidad de uso.
                    </p>
                    <p>
                        Únete a nosotros en esta revolución tecnológica y descubre cómo Smart Glass puede transformar tu entorno.
                    </p>
                </div>
                <div className="col-md-6">
                    <img
                        src="/src/assets/img/vidrio.png"
                        alt="Vidrio Inteligente"
                        className="img-fluid rounded"
                        style={{ width: "100%", height: "auto" }}
                    />
                </div>
            </div>
        </div>
    );
};