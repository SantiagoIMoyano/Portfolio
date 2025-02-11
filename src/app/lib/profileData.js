import Profile from "@/app/db/models/profile";

export async function fetchProfile() {
    try {
        const profilePromise = await Profile.findOne({
            attributes: ['presentation'],
            where: {role: 'FullStack'}
        })
        
        const profile = profilePromise.get({plain: true});

        return {
            profile
        };

    } catch(error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch profile data.');
    }
}