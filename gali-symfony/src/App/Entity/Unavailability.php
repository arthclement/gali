<?php

namespace App\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Unavailability
 *
 * @ORM\Table(name="unavailability", uniqueConstraints={@ORM\UniqueConstraint(name="idunavailability_UNIQUE", columns={"idunavailability"}), @ORM\UniqueConstraint(name="iduser_UNIQUE", columns={"iduser"})}, indexes={@ORM\Index(name="user_idx", columns={"iduser"})})
 * @ORM\Entity
 */
class Unavailability
{
    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="starttime", type="datetime", nullable=true)
     */
    private $starttime;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="endtime", type="datetime", nullable=true)
     */
    private $endtime;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=true)
     */
    private $description;

    /**
     * @var int
     *
     * @ORM\Column(name="idunavailability", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idunavailability;

    /**
     * @var \App\Entity\User>unavailability
     *
     * @ORM\ManyToOne(targetEntity="App\Entity\User>unavailability")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="iduser", referencedColumnName="iduser")
     * })
     */
    private $iduser;


}
