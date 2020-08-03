<?php

namespace NHS_JOBS\ACTIVATION\AddLocationTerms;

function location_parent_terms(){

	$location_parents = array(
		array(
			'name' => 'African Region',
			'slug' => 'african-region',
			'children' => location_african_terms()
		),
		array(
			'name' => 'Region of the Americas',
			'slug' => 'region-americas',
			'children' => location_americas_terms()
		),
		array(
			'name' => 'South-East Asia Region',
			'slug' => 'south-east-asia-region',
			'children' => location_SEAsia_terms()
		),
		array(
			'name' => 'European Region',
			'slug' => 'european-region',
			'children' => location_european_terms()
		),
		array(
			'name' => 'Eastern Mediterranean Region',
			'slug' => 'eastern-mediterranean-region',
			'children' => location_easternMediterranean_terms()
		),
		array(
			'name' => 'Western Pacific Region',
			'slug' => 'western-pacific-region',
			'children' => location_westernPacific_terms()
		)

	);

	return $location_parents;
}

function location_african_terms(){

	$african_locations = array(
		'Algeria',
		'Angola',
		'Benin',
		'Botswana',
		'Burkina Faso',
		'Burundi',
		'Cameroon',
		'Cape Verde',
		'Central African Republic',
		'Chad',
		'Comoros',
		'Ivory Coast',
		'Democratic Republic of the Congo',
		'Equatorial Guinea',
		'Eritrea',
		'Ethiopia',
		'Gabon',
		'Gambia',
		'Ghana',
		'Guinea',
		'Guinea-Bissau',
		'Kenya',
		'Lesotho',
		'Liberia',
		'Madagascar',
		'Malawi',
		'Mali',
		'Mauritania',
		'Mauritius',
		'Mozambique',
		'Namibia',
		'Niger',
		'Nigeria',
		'Republic of the Congo',
		'Rwanda',
		'São Tomé and Príncipe',
		'Senegal',
		'Seychelles',
		'Sierra Leone',
		'Somalia',
		'South Africa',
		'Swaziland',
		'Togo',
		'Uganda',
		'Tanzania',
		'Zambia',
		'Zimbabwe'
	);

	return $african_locations;
}


function location_americas_terms(){

	$americas_locations = array(
		'Antigua and Barbuda',
		'Argentina',
		'Bahamas',
		'Barbados',
		'Belize',
		'Bolivia',
		'Brazil',
		'Canada',
		'Chile',
		'Colombia',
		'Costa Rica',
		'Cuba',
		'Dominica',
		'Dominican Republic',
		'Ecuador',
		'El Salvador',
		'Grenada',
		'Guatemala',
		'Guyana',
		'Haiti',
		'Honduras',
		'Jamaica',
		'Mexico',
		'Nicaragua',
		'Panama',
		'Paraguay',
		'Peru',
		'Saint Kitts and Nevis',
		'Saint Lucia',
		'Saint Vincent and the Grenadines',
		'Suriname',
		'Trinidad and Tobago',
		'United States',
		'Uruguay',
		'Venezuela'
	);

	return $americas_locations;
}

function location_SEAsia_terms(){

	$SEAsia_locations = array(
		'Bangladesh',
		'Bhutan',
		'North Korea',
		'India',
		'Indonesia',
		'Maldives',
		'Myanmar',
		'Nepal',
		'Sri Lanka',
		'Thailand',
		'Timor-Leste'
	);

	return $SEAsia_locations;
}


function location_european_terms(){

	$european_locations = array(
		'Albania',
		'Andorra',
		'Armenia',
		'Austria',
		'Azerbaijan',
		'Belarus',
		'Belgium',
		'Bosnia and Herzegovina',
		'Bulgaria',
		'Croatia',
		'Cyprus',
		'Czech Republic',
		'Denmark',
		'Estonia',
		'Finland',
		'France',
		'Georgia',
		'Germany',
		'Greece',
		'Hungary',
		'Iceland',
		'Ireland',
		'Israel',
		'Italy',
		'Kazakhstan',
		'Kyrgyzstan',
		'Latvia',
		'Lithuania',
		'Luxembourg',
		'Malta',
		'Monaco',
		'Montenegro',
		'Netherlands',
		'North Macedonia',
		'Norway',
		'Poland',
		'Portugal',
		'Moldova',
		'Romania',
		'Russia',
		'San Marino',
		'Serbia',
		'Slovakia',
		'Slovenia',
		'Spain',
		'Sweden',
		'Switzerland',
		'Tajikistan',
		'Turkey',
		'Turkmenistan',
		'Ukraine',
		'United Kingdom',
		'Uzbekistan'
	);

	return $european_locations;
}


function location_easternMediterranean_terms(){

	$easternMediterranean_locations = array(
		'Afghanistan',
		'Bahrain',
		'Djibouti',
		'Egypt',
		'Iran',
		'Iraq',
		'Jordan',
		'Kuwait',
		'Lebanon',
		'Libya',
		'Morocco',
		'Oman',
		'Pakistan',
		'Palestine',
		'Qatar',
		'Saudi Arabia',
		'Somalia',
		'Sudan',
		'Syria',
		'Tunisia',
		'United Arab Emirates',
		'Yemen'
	);

	return $easternMediterranean_locations;
}


function location_westernPacific_terms(){

	$westernPacific_locations = array(
		'Australia',
		'Brunei',
		'Cambodia',
		'China',
		'Cook Islands',
		'Fiji',
		'Japan',
		'Kiribati',
		'Laos',
		'Malaysia',
		'Marshall Islands',
		'Micronesia',
		'Mongolia',
		'Nauru',
		'New Zealand',
		'Niue',
		'Palau',
		'Papua New Guinea',
		'Philippines',
		'South Korea',
		'Samoa',
		'Singapore',
		'Solomon Islands',
		'Taiwan',
		'Tonga',
		'Tuvalu',
		'Vanuatu',
		'Vietnam'
	);

	return $westernPacific_locations;
}


function add_location_terms(){

	$location_parents = location_parent_terms();

	foreach ( $location_parents as $location ) {

		wp_insert_term( $location['name'], 'nhs_location', array(
			'slug' => $location['slug']
		) );

		$parent_term = get_term_by( 'slug', $location['slug'], 'nhs_location' );
		$child_term = $location['children'];

		foreach ( $child_term as $term ) {

			wp_insert_term( $term, 'nhs_location', array(
				'parent' => $parent_term->term_id
			) );

		}

	}

}

add_location_terms();
