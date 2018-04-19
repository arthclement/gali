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
     * @var int
     *
     * @ORM\Column(name="idunavailability", type="integer", nullable=false, options={"unsigned"=true})
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    private $idunavailability;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="start_time", type="datetime", nullable=true)
     */
    private $startTime;

    /**
     * @var \DateTime|null
     *
     * @ORM\Column(name="end_time", type="datetime", nullable=true)
     */
    private $endTime;

    /**
     * @var string|null
     *
     * @ORM\Column(name="description", type="text", length=65535, nullable=true)
     */
    private $description;

    /**
     * @var \User
     *
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumns({
     *   @ORM\JoinColumn(name="iduser", referencedColumnName="iduser")
     * })
     */
    private $iduser;


}
