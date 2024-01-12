export interface Member {
    id: string;
    cin: string;
    nom: string;
    cv: string;
    type_mbr: string;
    prenom?: string; // Example: Adding an optional property
    email?: string; // Example: Adding an optional property
    password?: string; // Example: Adding an optional property
    grade?: string; // Example: Adding an optional property
    etablissement?: string; // Example: Adding an optional property
    diplome?: string; // Example: Adding an optional property
    dateInscription?: string; // Example: Adding an optional property
}
